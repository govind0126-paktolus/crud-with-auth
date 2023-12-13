/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDTO, toCreateUserDto } from './DTO/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from './DTO/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  // creation of user into db
  async createUser(createUserDTO: CreateUserDTO) {
    const userToSave = await toCreateUserDto(createUserDTO);
    return this.usersRepository.save(userToSave);
  }

  // getting all user from db
  getUsers() {
    return this.usersRepository.find();
  }

  // getting a user from db of id
  getUser(id1: number) {
    return this.usersRepository.findOne({ where: { id: id1 } });
  }

  // updating the data of user from db
  updateUser(id: number, updateUserDTO: UpdateUserDTO) {
    return this.usersRepository.update(id, updateUserDTO);
  }

  // deleting the user from id
  deleteUser(id: number) {
    return this.usersRepository.delete(id);
  }

  // finding the user from db based on email
  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
