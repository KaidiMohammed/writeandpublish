import { PrismaClient } from '@prisma/client';

class PrismaClienSingleton {

    public prismaClient: PrismaClient;
    private static prismaInstance: PrismaClienSingleton

    private constructor() {
        this.prismaClient = new PrismaClient();
    }

    public static getInstance() {
        if (!PrismaClienSingleton.prismaInstance) {
            PrismaClienSingleton.prismaInstance = new PrismaClienSingleton()
        }
        return PrismaClienSingleton.prismaInstance
    }
}

export { PrismaClienSingleton }