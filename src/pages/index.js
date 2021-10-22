import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import heroImage from "../images/bday-490.gif"
import book from "../images/Album-art.png"
import debit from "../images/debit_front.png"
import logo from "../images/logo-fb.png"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-primary-dark font-bold sm:text-7xl">
              Palju õnne, <br /> kallis Tormi!
            </h1>
            <p className="px-4 mt-8 text-lg text-primary sm:mt-8">
              Mare, Neeme, Ruben, Timba ja Len
            </p>
            <h2 className="px-4 pt-5 text-2xl font-bold">Sinu kingilaud:</h2>
          </div>
          <img
            className="w-full max-w-50 mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gift"
          />
        </div>
        <div className="sm:flex sm:items-center mb-10 mt-20 ">
          <Card
            img={debit}
            heading="Pangakonto rahaga"
            txt="Kasutajatunnus 5180297 - sisene siit oma Smart-ID-ga"
            url="https://www.swedbank.ee/private"
          />
          <Card
            img={logo}
            heading="Lapsetoetus"
            txt="Sinu Lapsetoetus laekub edaspidi sinu kontole"
          />
          <Card
            w="w-1/2"
            img={book}
            heading="Audioraamat"
            txt="Jaak Roosaare popp teos rahast jmt. Lae alla siit"
            url="https://www.dropbox.com/s/k11vcuzq6g72ode/RSO_heliraamat_2018.zip?dl=0"
          />
        </div>
      </main>
    </Layout>
  )
}
