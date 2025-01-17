/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CollectionService } from "../collection.service";
import { CollectionCreateInput } from "./CollectionCreateInput";
import { Collection } from "./Collection";
import { CollectionFindManyArgs } from "./CollectionFindManyArgs";
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput";
import { CollectionUpdateInput } from "./CollectionUpdateInput";
import { RecordFindManyArgs } from "../../record/base/RecordFindManyArgs";
import { Record } from "../../record/base/Record";
import { RecordWhereUniqueInput } from "../../record/base/RecordWhereUniqueInput";

export class CollectionControllerBase {
  constructor(protected readonly service: CollectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Collection })
  @swagger.ApiBody({
    type: CollectionCreateInput,
  })
  async createCollection(
    @common.Body() data: CollectionCreateInput
  ): Promise<Collection> {
    return await this.service.createCollection({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slug: true,
        structure: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Collection] })
  @ApiNestedQuery(CollectionFindManyArgs)
  async collections(@common.Req() request: Request): Promise<Collection[]> {
    const args = plainToClass(CollectionFindManyArgs, request.query);
    return this.service.collections({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slug: true,
        structure: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async collection(
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Collection | null> {
    const result = await this.service.collection({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slug: true,
        structure: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CollectionUpdateInput,
  })
  async updateCollection(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() data: CollectionUpdateInput
  ): Promise<Collection | null> {
    try {
      return await this.service.updateCollection({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          slug: true,
          structure: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCollection(
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Collection | null> {
    try {
      return await this.service.deleteCollection({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          slug: true,
          structure: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/records")
  @ApiNestedQuery(RecordFindManyArgs)
  async findRecords(
    @common.Req() request: Request,
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Record[]> {
    const query = plainToClass(RecordFindManyArgs, request.query);
    const results = await this.service.findRecords(params.id, {
      ...query,
      select: {
        collection: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        data: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/records")
  async connectRecords(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: RecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      records: {
        connect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/records")
  async updateRecords(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: RecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      records: {
        set: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/records")
  async disconnectRecords(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: RecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      records: {
        disconnect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/collection/slug/:slug")
  @swagger.ApiOkResponse({
    type: Collection,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetCollectionBySlug(
    @common.Body()
    body: string
  ): Promise<Collection> {
    return this.service.GetCollectionBySlug(body);
  }

  @common.Get("/collection/:id/records")
  @swagger.ApiOkResponse({
    type: Record,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetRecordsByCollectionId(
    @common.Body()
    body: string
  ): Promise<Record[]> {
    return this.service.GetRecordsByCollectionId(body);
  }
}
