/* eslint-disable prefer-destructuring */
import express from 'express';
import {
  createSong, getSongs, updateSongs, clearSong,
} from '../controllers/songsController';
import auth from '../config/auth';

/**
 * @swagger
 * /albums/{id}/songs:
 *   post:
 *     tags:
 *       - songs
 *     summary: Update a User's songs
 *     content:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                name:
 *                 type: string
 *                content:
 *                 type: string
 *                complete:
 *                 type: boolean
 *     responses:
 *       200:
 *             description:  song successfully Created.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error creating song
 * */
/**
 * @swagger
 * /albums/{id}/songs:
 *   get:
 *     tags:
 *       - songs
 *     summary: retrieve a User's songs
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: User songs successfully retrieved.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error retrieving songs
 * */
/**
 * @swagger
 * /albums/{id}/songs{songid}:
 *   patch:
 *     tags:
 *       - songs
 *     summary: Update a User's albums
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                name:
 *                 type: string
 *                content:
 *                 type: string
 *                complete:
 *                 type: boolean
 *     responses:
 *       200:
 *             description: User songs successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error updating songs
 * */
/**
 * @swagger
 * /albums/{id}/songs{songid}:
 *   delete:
 *     tags:
 *       - songs
 *     summary: delete a User's songs
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: User songs successfully deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error deleting songs
 * */
const router = express.Router();

router.post('/albums/:id/songs', auth, createSong);
router.get('/albums/:id/songs', auth, getSongs);
router.patch('/albums/:id/songs/:songid', auth, updateSongs);
// router.get('/albums/:id/songs/:id', auth, getOneSong);
router.delete('/albums/:id/songs/:songid', auth, clearSong);

export default router;
