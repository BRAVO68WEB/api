import DevnotesService from '../services/devnotes.service';
import { Request, Response } from 'express'
import { makeResponse } from '../libs'

export default class DevnotesController extends DevnotesService {
    public getAll = async (req: Request, res: Response) => {
        const devNotes = await this.getAllDevNotes()
        return res.status(200).json(makeResponse(devNotes))
    }

    public get = async (req: Request, res: Response) => {
        const devNote = await this.getDevNote(req.params.id)
        return res.status(200).json(makeResponse(devNote))
    }

    public create = async (req: Request, res: Response) => {
        const devNote = await this.createDevNote(req.body.title, req.body.description, req.body.content)
        return res.status(200).json(makeResponse(devNote))
    }

    public update = async (req: Request, res: Response) => {
        const devNote = await this.updateDevNote(req.params.id, req.body)
        return res.status(200).json(makeResponse(devNote))
    }

    public delete = async (req: Request, res: Response) => {
        const devNote = await this.deleteDevNote(req.params.id)
        return res.status(200).json(makeResponse(devNote))
    }
}
