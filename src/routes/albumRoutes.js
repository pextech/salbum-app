/* eslint-disable prefer-destructuring */
import express from 'express';
import {
  creatAlbum, getAlbums, updateAlbums, getOneAlbum, clearAlbum,
} from '../controllers/albumController';
import auth from '../config/auth';

/**
 * @swagger
 * /albums:
 *   post:
 *     tags:
 *       - albums
 *     summary: Update a User's duty
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
 *             description:  album successfully Created.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error creating album
 * */
/**
 * @swagger
 * /albums:
 *   get:
 *     tags:
 *       - albums
 *     summary: retrieve a User's albums
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: User albums successfully retrieved.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error retrieving album
 * */
/**
 * @swagger
 * /albums/{id}:
 *   patch:
 *     tags:
 *       - albums
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
 *             description: User albums successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error updating album
 * */
/**
 * @swagger
 * /albums/{id}:
 *   get:
 *     tags:
 *       - albums
 *     summary: get one User's album
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: User album successfully retrieved.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error retriving album
 * */
/**
 * @swagger
 * /albums/{id}:
 *   delete:
 *     tags:
 *       - albums
 *     summary: delete a User's album
 *     content:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: User album successfully deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 *       500:
 *             description: Error deleting album
 * */
const router = express.Router();

router.post('/albums', auth, creatAlbum);
router.get('/albums', auth, getAlbums);
router.patch('/albums/:id', auth, updateAlbums);
router.get('/albums/:id', auth, getOneAlbum);
router.delete('/albums/:id', auth, clearAlbum);

export default router;
