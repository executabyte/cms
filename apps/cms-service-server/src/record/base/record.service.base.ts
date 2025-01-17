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
  Record as PrismaRecord,
  Collection as PrismaCollection,
} from "@prisma/client";

export class RecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RecordCountArgs, "select">): Promise<number> {
    return this.prisma.record.count(args);
  }

  async records(args: Prisma.RecordFindManyArgs): Promise<PrismaRecord[]> {
    return this.prisma.record.findMany(args);
  }
  async record(
    args: Prisma.RecordFindUniqueArgs
  ): Promise<PrismaRecord | null> {
    return this.prisma.record.findUnique(args);
  }
  async createRecord(args: Prisma.RecordCreateArgs): Promise<PrismaRecord> {
    return this.prisma.record.create(args);
  }
  async updateRecord(args: Prisma.RecordUpdateArgs): Promise<PrismaRecord> {
    return this.prisma.record.update(args);
  }
  async deleteRecord(args: Prisma.RecordDeleteArgs): Promise<PrismaRecord> {
    return this.prisma.record.delete(args);
  }

  async getCollection(parentId: string): Promise<PrismaCollection | null> {
    return this.prisma.record
      .findUnique({
        where: { id: parentId },
      })
      .collection();
  }
}
