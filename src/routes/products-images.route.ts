import { FastifyInstance } from "fastify";
import { removeProductsImages, uploadProductsImages } from "../functions";

export async function productsImagesRoute(fastify: FastifyInstance) {

    fastify.post("/upload-products-images/:id", async (request, reply) => {
        const { id }: any = request.params;
        const images = request.parts();
        const result = await uploadProductsImages(fastify, Number(id), images);
        reply.code(result?.code!).send({ message: result?.message });
    });

    fastify.post("/delete-products-images", async (request, reply) => {
        const result = await removeProductsImages(fastify, request.body);
        reply.code(result?.code!).send({ message: result?.message });
    });
}