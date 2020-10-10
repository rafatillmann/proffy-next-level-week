import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://static1.purebreak.com.br/articles/4/94/17/4/@/365725--harry-potter-j-k-rowling-revela-insp-diapo-1.jpg" alt="Avatar" />
                <div>
                    <strong>Severo Snape</strong>
                    <span>Poções</span>
                </div>
            </header>
            <p>
                O Professor Severo Snape foi um bruxo mestiço. Durante sua vida, Severo Snape foi Mestre de Poções (1981–1996).
                        <br /> <br />
                Ele também foi um membro da Ordem da Fênix, e teve um papel muito importante em ambas as Guerras Bruxas contra Lord Voldemort.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 200,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp" />
                    Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;