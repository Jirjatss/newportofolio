import React from "react";
import Card from "../Card/Card";

function Education() {
  return (
    <div className="text-4xl text-white font-signika p-10 py-20 text-center mx-auto" id="education">
      <div className="mb-8">
        <span className="border-b-4 border-[#01d193]">Education</span>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 mx-auto mt-10">
        <Card gambar={require("../../assets/sd.png")} nama={"SDN Dasan"} alamat={"Pendidikan Street, Dasan Anyar Jereweh KSB, 84456"} url={"http://50204287.siap-sekolah.com/sekolah-profil/"} />
        <Card gambar={require("../../assets/smp.png")} nama={"Ponpes Al-Ikhlas"} alamat={"Pondok Pesantren Street No.112 Taliwang, 84355"} url={"http://50204318.siap-sekolah.com/sekolah-profil/"} />
        <Card gambar={require("../../assets/sma.png")} nama={"SMAN 5 Mataram"} alamat={"Udayana Street No. 2A Mataram, West Nusa Tenggara,  83125"} url={"https://sman-5-mtr.sch.id/"} />
        <Card gambar={require("../../assets/ub.png")} nama={"Universitas Brawijaya"} alamat={"Veteran Street Malang, Malang City, East Java 65145"} url={"https://ub.ac.id/id/"} />
      </div>
    </div>
  );
}

export default Education;
