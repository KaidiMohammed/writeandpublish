interface PrismaDataAccess<T> {
    create(element: T): any
    find(): any
}

export type { PrismaDataAccess }