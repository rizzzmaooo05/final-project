export const perusahaan = async(db, idPerusahaan ) => {
  const getDataFromDB = await db
    .from('detail_perusahaan__perusahaan')
    .select()
    .eq('id', idPerusahaan)
  
  const data = await getDataFromDB.data

  return data
}