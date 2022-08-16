
import React from 'react'

export const Receitas = () : JSX.Element => {
  const listaReceitas = [
    {
      nome: 'Receita 1',
      unidade: 'g',
      ingredientes: [
        {
          nome: 'Ingrediente 1',
          peso: 400
        },
        {
          nome: 'Ingrediente 2',
          peso: 300
        },
        {
          nome: 'Ingrediente 3',
          peso: 200
        },
        {
          nome: 'Ingrediente 4',
          peso: 100
        }
      ]
    },
    {
      nome: 'Receita 2',
      unidade: 'g',
      ingredientes: [
        {
          nome: 'Ingrediente 1',
          peso: 400
        },
        {
          nome: 'Ingrediente 2',
          peso: 300
        },
        {
          nome: 'Ingrediente 3',
          peso: 200
        },
        {
          nome: 'Ingrediente 4',
          peso: 100
        }
      ]
    },
    {
      nome: 'Receita 3',
      unidade: 'g',
      ingredientes: [
        {
          nome: 'Ingrediente 1',
          peso: 400
        },
        {
          nome: 'Ingrediente 2',
          peso: 300
        },
        {
          nome: 'Ingrediente 3',
          peso: 200
        },
        {
          nome: 'Ingrediente 4',
          peso: 100
        }
      ]
    }
  ]


  return (
    <div>
      <br />
      <select name="receitas" id="receitas-seletor" multiple>
        {
          listaReceitas.map((e, i) => {
            return React.createElement('option', { value: `receita-${(i+1)}`, key: `r-${i+1}` }, e.nome)
          })
        }
      </select>
    </div>
  )
}
