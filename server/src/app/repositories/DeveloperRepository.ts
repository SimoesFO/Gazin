import { EntityRepository, Repository } from 'typeorm';
import Developer from '../models/Developer';

@EntityRepository(Developer)
class DeveloperRepository extends Repository<Developer> {}

export default DeveloperRepository;
