
import React from 'react'
import { createClient } from '@supabase/supabase-js';

type MaterialEsmalte = {
  id: number
  inserted_at: string
  material: JSON
}

type ReceitaEsmalte = {
  id: number
  inserted_at: string
  receita: JSON
}

const supabase = createClient(
  String(process.env.SUPABASE_URL), String(process.env.SUPABASE_ANON_KEY)
  )

// const responseMaterial = await supabase
//   .from<MaterialEsmalte>('materiais-esmaltes-ceramicos') // Message maps to the type of the row in your database.
//   .select('*')
//   responseMaterial.data 
  
export const Receitas = () : JSX.Element => {
  // supabase
  // .from("materiais-esmaltes-ceramicos")
  // .select('*')
  // .then(({ data }) => {
  //   console.log(data)
  // });

  // supabase
  // .from("receitas-esmaltes-ceramicos")
  // .select('*')
  // .then(({ data }) => {
  //   console.log(data)
  // });

  const listaReceitas = [
    {
      nome: 'Transparente',
      unidade: 'g',
      temperatura: 1200,
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
      nome: 'Branco',
      unidade: 'g',
      temperatura: 1200,
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
        },
        {
          nome: 'Ingrediente 5',
          peso: 100
        }
      ]
    },
    {
      nome: 'Transparente amolecido',
      unidade: 'g',
      temperatura: 1200,
      ingredientes: [
        {
          nome: 'Ingrediente 1',
          peso: 450
        },
        {
          nome: 'Ingrediente 2',
          peso: 275
        },
        {
          nome: 'Ingrediente 3',
          peso: 200
        },
        {
          nome: 'Ingrediente 4',
          peso: 75
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
            return React.createElement('option', { value: `receita-${(i+1)}`, key: `receita-${i+1}` }, `(${e.temperatura}°C) ${e.nome}`)
          })
        }
      </select>
    </div>
  )
}
