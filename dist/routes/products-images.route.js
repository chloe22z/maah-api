"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsImagesRoute = productsImagesRoute;
const functions_1 = require("../functions");
async function productsImagesRoute(fastify) {
    fastify.post("/upload-products-images/:id", async (request, reply) => {
        const { id } = request.params;
        const images = request.parts();
        const result = await (0, functions_1.uploadProductsImages)(fastify, Number(id), images);
        reply.code(result?.code).send({ message: result?.message });
    });
    fastify.post("/delete-products-images", async (request, reply) => {
        const result = await (0, functions_1.removeProductsImages)(fastify, request.body);
        reply.code(result?.code).send({ message: result?.message });
    });
}
//# sourceMappingURL=products-images.route.js.map