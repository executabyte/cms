import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollectionService } from "./collection.service";
import { CollectionGrpcControllerBase } from "./base/collection.grpc.controller.base";

@swagger.ApiTags("collections")
@common.Controller("collections")
export class CollectionGrpcController extends CollectionGrpcControllerBase {
  constructor(protected readonly service: CollectionService) {
    super(service);
  }
}
