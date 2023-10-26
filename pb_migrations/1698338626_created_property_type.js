/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8yjclinmuvbxn38",
    "created": "2023-10-26 16:43:46.064Z",
    "updated": "2023-10-26 16:43:46.064Z",
    "name": "property_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lrbfjhzj",
        "name": "type",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8yjclinmuvbxn38");

  return dao.deleteCollection(collection);
})
