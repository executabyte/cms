/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Collection as PrismaCollection,
  Record as PrismaRecord,
} from "@prisma/client";
import { Collection } from "./Collection";
import { Record } from "../../record/base/Record";

export class CollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CollectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.collection.count(args);
  }

  async collections(
    args: Prisma.CollectionFindManyArgs
  ): Promise<PrismaCollection[]> {
    return this.prisma.collection.findMany(args);
  }
  async collection(
    args: Prisma.CollectionFindUniqueArgs
  ): Promise<PrismaCollection | null> {
    return this.prisma.collection.findUnique(args);
  }
  async createCollection(
    args: Prisma.CollectionCreateArgs
  ): Promise<PrismaCollection> {
    return this.prisma.collection.create(args);
  }
  async updateCollection(
    args: Prisma.CollectionUpdateArgs
  ): Promise<PrismaCollection> {
    return this.prisma.collection.update(args);
  }
  async deleteCollection(
    args: Prisma.CollectionDeleteArgs
  ): Promise<PrismaCollection> {
    return this.prisma.collection.delete(args);
  }

  async findRecords(
    parentId: string,
    args: Prisma.RecordFindManyArgs
  ): Promise<PrismaRecord[]> {
    return this.prisma.collection
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .records(args);
  }
  async GetCollectionBySlug(args: string): Promise<Collection> {
    throw new Error("Not implemented");
  }
  async GetRecordsByCollectionId(args: string): Promise<Record[]> {
    throw new Error("Not implemented");
  }
}
