/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjclinmuvbxn38")

  collection.name = "property_type"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjclinmuvbxn38")

  collection.name = "PropertyType"

  return dao.saveCollection(collection)
})
