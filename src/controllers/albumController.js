/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */

import jwt from 'jsonwebtoken';

const albums = require('../models').albums;
const users = require('../models').users;

// to check if the name of album is valid
function isValidName(name) {
  if (name.length >= 3 && name != null) {
    return true;
  }
  return false;
}

export const creatAlbum = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = jwt.decode(token);

  const user = await users.findOne({ where: { email } });

  if (user < 1) {
    (res.status(500).json({ status: 500, message: 'authentication errored, make sure you are logged in' }));
  }
  if (!isValidName(req.body.name)) {
    return res.status(500).json({ status: 'error', message: 'check the inputted name please' });
  }
  // creating an album

  albums.create({
    name: req.body.name,
    albumid: user.id,

  }).then((album) => {
    res.status(201).json({
      status: 201,
      message: 'album successfuly created',
      album,

    });
  }).catch((error) => { res.status(500).json({ error }); });
};

export const getAlbums = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = jwt.decode(token);
  // const user = await users.findOne({ where: { email } });

  users.findAll({
    include: [{
      model: albums,
      as: 'albums',
    }],
    where: { email },
  }).then((userAlbums) => {
    res.status(200).json({ status: '200', message: `returned all albums for ${email}`, userAlbums });
  }).catch((err) => {
    (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
  });
};

export const updateAlbums = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = jwt.decode(token);
  const user = await users.findOne({ where: { email } });
  const albumid = user.id;
  const id = req.params.id;
  const body = req.body;
  const album = await albums.findOne({ where: { id, albumid } });
  if (album < 1) {
    (res.status(500).json({ status: 500, message: 'there is no album with such id' }));
  } else {
    albums.update(req.body, { fields: Object.keys(req.body), where: { id } }).then(() => {
      res.status(201).json({ status: '201', message: ` updated album by ${email}`, body });
    }).catch((err) => {
      (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
    });
  }
};

export const getOneAlbum = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = jwt.decode(token);
  const user = await users.findOne({ where: { email } });
  const albumid = user.id;
  const id = req.params.id;
  const album = await albums.findOne({ where: { id, albumid } });
  if (album < 1) {
    (res.status(500).json({ status: 500, message: 'there is no album with such id' }));
  } else {
    albums.findOne({ where: { id } }).then((userAlbum) => {
      res.status(201).json({ status: '200', message: ` fetched one album by ${email}`, userAlbum });
    }).catch((err) => {
      (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
    });
  }
};

export const clearAlbum = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = jwt.decode(token);
  const user = await users.findOne({ where: { email } });
  const albumid = user.id;
  const id = req.params.id;
  const album = await albums.findOne({ where: { id, albumid } });
  if (album < 1) {
    (res.status(500).json({ status: 500, message: 'authorisation denied.' }));
  }

  albums.destroy({ where: { id } }).then(() => {
    res.status(200).json({ status: '200', message: ` deleted one album by ${email}` });
  }).catch((err) => {
    (res.status(500).json({ status: 500, err }));
  });
};
