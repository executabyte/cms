import { Module } from "@nestjs/common";
import { CollectionModuleBase } from "./base/collection.module.base";
import { CollectionService } from "./collection.service";
import { CollectionController } from "./collection.controller";
import { CollectionGrpcController } from "./collection.grpc.controller";
import { CollectionResolver } from "./collection.resolver";

@Module({
  imports: [CollectionModuleBase],
  controllers: [CollectionController, CollectionGrpcController],
  providers: [CollectionService, CollectionResolver],
  exports: [CollectionService],
})
export class CollectionModule {}
