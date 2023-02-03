import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form className='create-form'>
    <Form.Field>
      <label>Digite seu nome:</label>
      <input placeholder='Digite seu nome completo' />
    </Form.Field>
    <Form.Field>
      <label>Digite seu email:</label>
      <input placeholder='digite seu melhor email' />
    </Form.Field>
    <Form.Field>
      <label>Digite seu cpf:</label>
      <input placeholder='digite seu cpf' />
    </Form.Field>
    <Form.Field>
      <label>Digite seu telefone:</label>
      <input placeholder='digite seu telefone' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Eu Aceito os Termos e Condições!' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm