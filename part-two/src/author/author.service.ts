import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import authors from 'src/data/authors';
import { Author, AuthorDocument } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async findById(id) {
    return this.authorModel.findById(id).lean();
  }

  async findMany() {
    return this.authorModel.find().lean();
  }
}
