import Header from '../components/Header'

import Arduino from '../assets/componentes/arduino.svg'
import Bomba from '../assets/componentes/bomba.svg'
import Led from '../assets/componentes/led.svg'
import Fio from '../assets/componentes/Fio.svg'
import Modulo from '../assets/componentes/modulo.svg'
import Bomba2 from '../assets/componentes/bomba2.svg'
import Motor from '../assets/componentes/passo.svg'
import Servo from '../assets/componentes/servo.svg'
import Sensor from '../assets/componentes/sensor.svg'
import Rele from '../assets/componentes/rele.svg'

function Componentes() {
  return (    
        <main>
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
        <Header />

          <h1 className="text-tittle-green text-3xl uppercase font-inter text-center font-black md:text-6xl m-10 mb-36">Componentes</h1>
          
          <div className="arduino">
            
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Arduino} className="bg-tittle-green rounded-lg mx-auto lg:ml-9 w-56 mb-6 md:p-6 md:mb-0 lg:w-96" alt="Imagem de um Arduino" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green text-center font-inter text-lg font-bold mb-4">Arduino Mega</h2>
                <p className="w-80 lg:w-auto ml-9 lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2">
                  <span className="font-bold">Função:</span> O Arduino Mega é uma placa de microcontrolador projetada para projetos mais complexos e que exigem mais recursos do que as placas Arduino padrão, como o Uno. Ele possui um número maior de pinos digitais e analógicos, mais memória (RAM, flash e EEPROM), e um microcontrolador mais potente (ATmega2560)
                </p>
                <p className="w-80 lg:w-auto ml-9 lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2">
                  <span className="font-bold">Preço:</span> R$ 219,90
                </p>
              </div>
            </div>
          </div>

          <div className="bomba">
            <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              
              <div className="texto ml-9">
              <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Bombas de Água Submersível</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  A bomba de água submersível 24V é projetada para funcionar submersa e pode ser controlada por um microcontrolador, como o Arduino, para aplicações como irrigação automatizada, aquários, fontes decorativas e outros sistemas que necessitem de movimentação controlada de água.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 11,90</p>
              </div>

              <img src={Bomba} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem da bomba" />
            </div>
          </div>

          <div className="bomba2">
            
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mb-32 lg:mr-9">
              <img src={Bomba2} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem da bomba" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Bombas de Água</h2>   
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Uma bomba de água não submersível controlada por Arduino é um dispositivo usado para mover água de um local para outro sem a necessidade de ser submersa na água.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 50,00</p>
              </div>
            </div>
          </div>

          <div className="Sonico">
            
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:ml-9 lg:gap-40 lg:mr-9 lg:mb-32 ">
              <img src={Sensor} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de uma lampada de led" />
              <div className="texto lg:max">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Sensor Ultrassônico</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O sensor ultrassônico para Arduino mede distâncias emitindo ondas sonoras e calculando o tempo de retorno após refletirem em um objeto. Com essa informação, ele determina a distância precisa entre o sensor e o objeto, sendo ideal para projetos de robótica e automação que exigem detecção de obstáculos ou medições de proximidade.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 11,90</p>
                
              </div>
            </div>
          </div>

          <div className="Componentes">
            
            <div className="flex flex-col items-center justify-center lg:gap-40 md:flex-row md:items-center lg:mr-9 lg:mb-32">
              <img src={Fio} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de alguns fios" />
              <div className="texto flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Fios, conectores e componentes eletrônicos diversos</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Eles variam em tipo e tamanho, incluindo jumpers, cabos macho-macho e macho-fêmea, e são essenciais para trocar dados e sinais elétricos entre o Arduino e os dispositivos externos em um projeto eletrônico.</p>
                <p className="lg:w-auto w-80 lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 25,00</p>
              </div>
            </div>
          </div>

          <div className="Bluetooh ">
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-center justify-around lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Modulo} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um módulo Bluetooh"/>
              <div className="texto lg:ml-9">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Módulo Bluetooh</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O módulo Bluetooth para Arduino permite comunicação sem fio com dispositivos como smartphones e computadores, facilitando troca de dados, controle remoto, transmissão de informações de sensores e recebimento de comandos. Ideal para automação, robótica e dispositivos móveis.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> 13,00 a 40,00 reais.</p>
              </div>
            </div>
          </div>

          <div className="Relé">
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Rele} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um módulo Bluetooh" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Relé</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Atua como um interruptor controlado eletronicamente, permitindo que o Arduino controle dispositivos de alta potência ou alta tensão, como lâmpadas, motores e eletrodomésticos, que não podem ser diretamente alimentados pelos pinos do Arduino devido à sua baixa corrente e tensão.</p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 12,90</p>
              </div>
            </div>
          </div>

          <div className="led">
            
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Led} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de uma lampada de led" />
              <div className="texto lg:ml-9">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Iluminação LED</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O LED UV em sistemas de cultivo indoor estimula o crescimento e produção de compostos benéficos nas plantas, aumentando sua resistência a pragas e doenças. Com Arduino, é possível controlar com precisão a intensidade e duração da exposição, otimizando o cultivo de acordo com as necessidades das plantas.</p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span>  37,90.</p>
              </div>
            </div>
          </div>

          <div className="Motor de Passo">
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Motor} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Motor de passo</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O motor de passo no Arduino é utilizado para mover objetos com precisão controlada em passos incrementais. Diferente dos motores tradicionais, ele permite que o eixo gire em ângulos específicos e controlados, o que é ideal para aplicações que requerem posicionamento exato, como impressoras 3D, máquinas CNC, robótica e outros sistemas automatizados.
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 18,90</p>
              </div>
            </div>
          </div>

          <div className="Servo Motor lg:ml-9">
            
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40 lg:mr-9 pb-8 ">
              <img src={Servo} className=' w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Servo Motor</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  O servo motor no Arduino é utilizado para controlar o movimento de um eixo em posições precisas, geralmente dentro de um intervalo de 0 a 180 graus.
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 17,90</p>
              </div>
            </div>
          </div>
        </section>
        </main>
  )
}

export default Componentes