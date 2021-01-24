/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */

const songs = require('../models').songs;
const albums = require('../models').albums;

// to check if the name of album is valid
function isValidName(name) {
  if (name.length >= 3 && name != null) {
    return true;
  }
  return false;
}

export const createSong = async (req, res) => {
  const albumid = req.params.id;
  const albumFinder = await albums.findOne({ where: { id: albumid } });
  if (albumFinder < 1) {
    (res.status(404).json({ status: 404, message: 'soory,there is no such album' }));
  }

  if (!isValidName(req.body.name)) {
    return res.status(500).json({ status: 'error', message: 'check the inputted name please' });
  }
  // creating a song

  songs.create({
    name: req.body.name,
    songsid: albumFinder.id,

  }).then((song) => {
    res.status(201).json({
      status: 201,
      message: `song successfuly saved in the ${albumFinder.name} album`,
      song,

    });
  }).catch((error) => { res.status(500).json({ error }); });
};

export const getSongs = async (req, res) => {
  const albumid = req.params.id;
  const albumFinder = await albums.findOne({ where: { id: albumid } });
  if (albumFinder < 1) {
    (res.status(404).json({ status: 404, message: 'soory,there is no such album' }));
  }
  songs.findAll({ where: { songsid: albumid } }).then((songlist) => {
    res.status(200).json({ status: '200', message: `returned all songs for ${albumFinder.name} album`, songlist });
  }).catch((err) => {
    (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
  });
};

export const updateSongs = async (req, res) => {
  const id = req.params.id;
  const songid = req.params.songid;
  const albumFinder = await albums.findOne({ where: { id } });
  if (albumFinder < 1) {
    (res.status(404).json({ status: 404, message: 'soory,there is no such album' }));
  }
  const body = req.body;
  const song = await songs.findOne({ where: { id: songid, songsid: id } });
  if (song < 1) {
    (res.status(500).json({ status: 500, message: 'there is no song with such id' }));
  } else {
    songs.update(req.body, { fields: Object.keys(req.body), where: { id: songid, songsid: id } }).then(() => {
      res.status(201).json({ status: '201', message: 'updated song', body });
    }).catch((err) => {
      (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
    });
  }
};

export const getOnesong = async (req, res) => {
  const id = req.params.id;
  const songid = req.params.songid;
  const albumFinder = await albums.findOne({ where: { id } });
  if (albumFinder < 1) {
    (res.status(404).json({ status: 404, message: 'soory,there is no such album' }));
  }
  const song = await songs.findOne({ where: { id: songid, songsid: id } });
  if (song < 1) {
    (res.status(500).json({ status: 500, message: 'there is no song with such id' }));
  } else {
    songs.findOne({ where: { id: songid, songsid: id } }).then((songDetail) => {
      res.status(201).json({ status: '200', message: 'fetched one song', songDetail });
    }).catch((err) => {
      (res.status(500).json({ status: 500, err, message: 'authentication errored, make sure you are logged in' }));
    });
  }
};

export const clearSong = async (req, res) => {
  const id = req.params.id;
  const songid = req.params.songid;
  const albumFinder = await albums.findOne({ where: { id } });
  if (albumFinder < 1) {
    (res.status(404).json({ status: 404, message: 'soory,there is no such album' }));
  }
  const song = await songs.findOne({ where: { id: songid, songsid: id } });

  if (song < 1) {
    (res.status(500).json({ status: 500, message: 'authorisation denied.' }));
  }

  albums.destroy({ where: { id: songid, songsid: id } }).then(() => {
    res.status(200).json({ status: '200', message: 'deleted one song in the album' });
  }).catch((err) => {
    (res.status(500).json({ status: 500, err }));
  });
};
