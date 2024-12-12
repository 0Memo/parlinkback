"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseCode = void 0;
const responseCode = (data) => {
    return {
        success: {
            event: {
                filter: `Liste d'annonces filtrées`,
                filterUser: `Liste d'annonces de l'utilisateur`,
                byId: `Annonce avec l'id ${data}`,
                create: `L'annonce a bien été créée`,
                update: `L'annonce avec l'id ${data} a bien été mise à jour`,
                delete: `L'annonce avec l'id ${data} a bien été supprimée`
            }
        },
        error: {
            event: {
                byId: `L'annonce ${data} n'a pas été trouvée`,
                update: `L'annonce ${data} n'a pas été trouvée`,
                delete: `L'annonce ${data} n'a pas été trouvée`,
                user: `L'utilisateur ${data} n'existe pas`
            }
        }
    };
};
exports.responseCode = responseCode;
//# sourceMappingURL=response.utils.js.map