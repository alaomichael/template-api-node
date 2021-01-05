import User from '@modules/user/entities/typeorm/User';
import {
  saveEntityInRepository,
  findEntityInRepositoryByProp,
} from '@shared/utils/testUtils';
import { IUserRepository } from '../dto/IUserRepository';

export default class FakeUserRepository implements IUserRepository {
  private ormRepository: User[];

  constructor() {
    this.ormRepository = [];
  }

  public async save(user: User): Promise<User> {
    saveEntityInRepository(this.ormRepository, user);
    return user;
  }

  public async findByProp(
    prop: keyof User,
    value: unknown,
  ): Promise<User | undefined> {
    return findEntityInRepositoryByProp(this.ormRepository, {
      propName: prop,
      propValue: value,
    });
  }
}
