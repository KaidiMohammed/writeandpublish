import { Container } from "inversify";

import { TYPES } from "@core/common/types/dependecies-types";

import { SavePostAsDraftUseCase } from "@core/application/port/in/savePostAsDraftUseCase";
import { SavePostAsDraftService } from "@core/application/domain/service/savePostAsDraftService";
import { PersistPostPort } from "@core/application/port/out/persistPostPort";
import { PostPersistenceAdapter } from "@core/adapter/out/persistence/PostPersistenceAdapter";
import { PersistPostInDatabase } from "@core/data/interfaces/persistPostInDatabase";
import { PersistPostinDatabase } from "@core/data/prisma/services/persistPostInDatabase";
import { LoadPostFromDatabase } from "@core/data/interfaces/loadPostFromDatabase";
import { LoadPostsFromDatabase } from "@core/data/prisma/services/loadPostFromDatabase";
import { LoadPostPort } from "@core/application/port/out/loadPostPort";


const myContainer = new Container();
myContainer.bind<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase).to(SavePostAsDraftService);
myContainer.bind<PersistPostPort>(TYPES.SavePostPort).to(PostPersistenceAdapter);
myContainer.bind<LoadPostPort>(TYPES.LoadPostPort).to(PostPersistenceAdapter);
myContainer.bind<PersistPostInDatabase>(TYPES.PersistPostInDatabase).to(PersistPostinDatabase);
myContainer.bind<LoadPostFromDatabase>(TYPES.LoadPostFromDatabase).to(LoadPostsFromDatabase);



export { myContainer };