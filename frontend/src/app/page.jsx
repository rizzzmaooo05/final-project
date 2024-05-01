import Header from "@/components/Header";
import { database } from "@/libs/database";

const Page = async () => {
  const db = database();
  const getDataFromDB = await db
    .from("lowongan_pekerjaan")
    .select(
      `
      id,
      judul,
      detail_perusahaan__perusahaan(nama),
      lokasi,
      jenis_pekerjaan_terformat
    `
    )
    .limit(20);
  const response = await getDataFromDB.data;

  return (
    <>
      <Header />
      <main>
        <div className="m-4 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center ">
          {response.map((data) => {
            return (
              <a href={`/pekerjaan/${data.id}`} key={data.id}>
                <div
                  className="p-4 border-2 border-red-500 rounded-xl hover:scale-[102%] h-52"
                >
                  <h3 className="font-semibold text-xl">{data.judul}</h3>
                  <p className="text-sm">
                    {data.detail_perusahaan__perusahaan?.nama
                      ? `Perusahaan: ${data.detail_perusahaan__perusahaan.nama}`
                      : null}
                  </p>
                  <p className="mt-2 text-sm">
                    {data.lokasi ? `Lokasi: ${data.lokasi}` : null}
                  </p>
                  <p className="text-sm">
                    {data.jenis_pekerjaan_terformat
                      ? `Jenis Pekerjaan: ${data.jenis_pekerjaan_terformat}`
                      : null}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Page;
