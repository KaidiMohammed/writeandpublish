import { Container } from "inversify";
import { TYPES } from "./src/common/types/dependecies-types";
import { SavePostAsDraftUseCase } from "./src/application/port/in/savePostAsDraftUseCase";
import { SavePostAsDraftService } from "./src/application/domain/service/savePostAsDraftService";
import { PersistPostPort } from "./src/application/port/out/persistPostPort";
import { PostPersistenceAdapter } from "./src/adapter/out/persistence/PostPersistenceAdapter";
import { PersistPostInDatabase } from "./src/data/interfaces/persistPostInDatabase";
import { PersistPostinDatabase } from "./src/data/prisma/services/persistPostInDatabase";
import { LoadPostFromDatabase } from "./src/data/interfaces/loadPostFromDatabase";
import { LoadPostsFromDatabase } from "./src/data/prisma/services/loadPostFromDatabase";
import { LoadPostPort } from "./src/application/port/out/loadPostPort";

const myContainer = new Container();
myContainer.bind<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase).to(SavePostAsDraftService);
myContainer.bind<PersistPostPort>(TYPES.SavePostPort).to(PostPersistenceAdapter);
myContainer.bind<LoadPostPort>(TYPES.LoadPostPort).to(PostPersistenceAdapter);
myContainer.bind<PersistPostInDatabase>(TYPES.PersistPostInDatabase).to(PersistPostinDatabase);
myContainer.bind<LoadPostFromDatabase>(TYPES.LoadPostFromDatabase).to(LoadPostsFromDatabase);



export { myContainer };