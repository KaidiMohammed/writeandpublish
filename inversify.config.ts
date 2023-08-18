import { Container } from "inversify";
import { TYPES } from "./pages/common/types/dependecies-types";
import { SavePostAsDraftUseCase } from "./pages/application/port/in/savePostAsDraftUseCase";
import { SavePostAsDraftService } from "./pages/application/domain/service/savePostAsDraftService";
import { PersistPostPort } from "./pages/application/port/out/persistPostPort";
import { PostPersistenceAdapter } from "./pages/adapter/out/persistence/PostPersistenceAdapter";
import { PersistPostInDatabase } from "./pages/data/interfaces/persistPostInDatabase";
import { PersistPostinDatabase } from "./pages/data/prisma/services/persistPostInDatabase";
import { LoadPostFromDatabase } from "./pages/data/interfaces/loadPostFromDatabase";
import { LoadPostsFromDatabase } from "./pages/data/prisma/services/loadPostFromDatabase";
import { LoadPostPort } from "./pages/application/port/out/loadPostPort";
import { LoadPostsService } from "./pages/application/domain/service/loadPostService";

const myContainer = new Container();
myContainer.bind<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase).to(SavePostAsDraftService);
myContainer.bind<PersistPostPort>(TYPES.SavePostPort).to(PostPersistenceAdapter);
myContainer.bind<LoadPostPort>(TYPES.LoadPostPort).to(PostPersistenceAdapter);
myContainer.bind<PersistPostInDatabase>(TYPES.PersistPostInDatabase).to(PersistPostinDatabase);
myContainer.bind<LoadPostFromDatabase>(TYPES.LoadPostFromDatabase).to(LoadPostsFromDatabase);



export { myContainer };