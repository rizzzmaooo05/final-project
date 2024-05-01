export const response = async(db, table, selectQuery, page, entryData ) => {
  const getDataFromDB = await db
    .from(table)
    .select(selectQuery)
    .range(entryData * (page - 1), entryData * page - 1)
  
  const pageNow = parseInt(page)
  const nextPageAvailable = getDataFromDB.data.length >= entryData
  
  const data = await getDataFromDB.data
  
  const response = {
    "pagination": {pageNow, nextPageAvailable},
    "data": data
  }

  return response
}