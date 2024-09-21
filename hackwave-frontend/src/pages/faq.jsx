import React from 'react';
import Navbar from '../components/navbar';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const Faq = ()=>{
    return (
        <div>
            <Navbar />
            <section className='bg-gradient-to-br  flex flex-col justify-center items-center min-h-screen'>
            <div
              class="bg-white w-4/5 px-10 pb-8 pt-10 rounded-lg flex justify-between flex-row"
            >
              <div class="w-full">
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Ma carte CIB est bloquée, que dois-je faire ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Si votre carte est bloquée, veuillez vérifier si vous avez atteint
                    le nombre limite de tentatives de saisie du code PIN. Dans ce cas,
                    rendez-vous à votre agence bancaire pour débloquer votre carte.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Comment vérifier si ma carte est active ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Pour vérifier l’état de votre carte, vous pouvez contacter votre
                    banque pour connaître son statut. Vous pouvez également essayer de
                    faire un retrait ou un paiement pour voir si la carte fonctionne.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    J’ai perdu ma carte, comment la bloquer ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Contactez immédiatement votre banque ou Algérie Poste pour signaler
                    la perte et demander le blocage de votre carte.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Comment renouveler ma carte CIB ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Pour renouveler votre carte CIB, rendez-vous dans votre agence
                    bancaire. Vous devrez fournir une pièce d’identité valide et remplir
                    les formulaires nécessaires.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Comment puis-je changer le code PIN de ma carte ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Vous pouvez changer votre code PIN en utilisant un distributeur
                    automatique de billets (DAB) de votre banque ou en vous rendant à
                    votre agence.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Comment vérifier si ma carte est active ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Pour vérifier l’état de votre carte, vous pouvez contacter votre
                    banque pour connaître son statut. Vous pouvez également essayer de
                    faire un retrait ou un paiement pour voir si la carte fonctionne.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    J’ai perdu ma carte, comment la bloquer ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Contactez immédiatement votre banque ou Algérie Poste pour signaler
                    la perte et demander le blocage de votre carte.
                  </p>
                </details>
                <details
                  class="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                >
                  <summary
                    class="list-none font-semibold relative text-sm cursor-pointer pr-7"
                  >
                    Comment renouveler ma carte CIB ?
                    <div
                      class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                    >
                      <svg
                        class="h-5 w-4 text-pink-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p class="text-xs pt-3">
                    Pour renouveler votre carte CIB, rendez-vous dans votre agence
                    bancaire. Vous devrez fournir une pièce d’identité valide et remplir
                    les formulaires nécessaires.
                  </p>
                </details>
               
              </div>
            </div>
            </section>
        </div>
    )
}

export default Faq;