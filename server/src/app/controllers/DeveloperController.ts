import { validateOrReject } from 'class-validator';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import IPagination from '../interfaces/IPagination';
import IQueryParams from '../interfaces/IQueryParams';
import Developer from '../models/Developer';
import DeveloperRepository from '../repositories/DeveloperRepository';
import DeveloperView from '../view/DeveloperView';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const { limit, start } = req.query as IQueryParams;

    const pagination: IPagination = {
      take: limit || 50,
      skip: start || 0,
    };

    const repository = getCustomRepository(DeveloperRepository);
    const [devs, total] = await repository.findAndCount(pagination);

    if (total === 0)
      return res.status(404).json({ message: 'Developers not found.' });

    return res.json({ total, data: DeveloperView.renderMany(devs) });
  },

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const repository = getCustomRepository(DeveloperRepository);
    const dev = await repository.findOne(id);

    if (!dev) return res.status(404).json({ message: 'Developer not found.' });

    return res.json(dev.getView());
  },

  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as Developer;

    const repository = getCustomRepository(DeveloperRepository);
    const dev = repository.create(data);
    await validateOrReject(dev);
    await repository.save(dev);

    return res.status(200).json(dev.getView());
  },

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const repository = getCustomRepository(DeveloperRepository);
    const dev = await repository.findOne(id, { select: ['id'] });

    if (!dev) return res.status(404).json({ message: 'Developer not found.' });

    const newDev = repository.create({ ...dev, ...req.body } as Developer);
    await repository.save(newDev);

    return res.json(newDev.getView());
  },

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const repository = getCustomRepository(DeveloperRepository);
    const dev = await repository.findOne(id);

    if (!dev) return res.status(404).json({ message: 'Developer not found.' });

    await repository.remove(dev);

    return res.status(204).json(dev.getView());
  },
};
