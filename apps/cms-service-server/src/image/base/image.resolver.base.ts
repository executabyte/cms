/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Image } from "./Image";
import { ImageCountArgs } from "./ImageCountArgs";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageFindUniqueArgs } from "./ImageFindUniqueArgs";
import { CreateImageArgs } from "./CreateImageArgs";
import { UpdateImageArgs } from "./UpdateImageArgs";
import { DeleteImageArgs } from "./DeleteImageArgs";
import { ResizeImageInput } from "../ResizeImageInput";
import { ImageCreateInput } from "./ImageCreateInput";
import { ImageService } from "../image.service";
@graphql.Resolver(() => Image)
export class ImageResolverBase {
  constructor(protected readonly service: ImageService) {}

  async _imagesMeta(
    @graphql.Args() args: ImageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Image])
  async images(@graphql.Args() args: ImageFindManyArgs): Promise<Image[]> {
    return this.service.images(args);
  }

  @graphql.Query(() => Image, { nullable: true })
  async image(
    @graphql.Args() args: ImageFindUniqueArgs
  ): Promise<Image | null> {
    const result = await this.service.image(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Image)
  async createImage(@graphql.Args() args: CreateImageArgs): Promise<Image> {
    return await this.service.createImage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Image)
  async updateImage(
    @graphql.Args() args: UpdateImageArgs
  ): Promise<Image | null> {
    try {
      return await this.service.updateImage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Image)
  async deleteImage(
    @graphql.Args() args: DeleteImageArgs
  ): Promise<Image | null> {
    try {
      return await this.service.deleteImage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Image)
  async ResizeImage(
    @graphql.Args()
    args: ResizeImageInput
  ): Promise<Image> {
    return this.service.ResizeImage(args);
  }

  @graphql.Mutation(() => Image)
  async UploadImage(
    @graphql.Args()
    args: ImageCreateInput
  ): Promise<Image> {
    return this.service.UploadImage(args);
  }
}
