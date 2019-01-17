import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from '../../helpers/validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderDefinition = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} type={type} placeholder={label} rows="5" cols="70" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderMatchedVocab = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <button type="button" onClick={() => fields.push({})}>
        Add Word/Definition pair
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
    {fields.map((member, index) => (
      <div key={index}>
        <button
          type="button"
          title="Remove Vocab Pair"
          onClick={() => fields.remove(index)}
        />
        <h4>Vocabulary Pair #{index + 1}</h4>
        <Field
          name={`${member}.word`}
          type="text"
          component={renderField}
          label="Word"
        />
        <Field
          name={`${member}.definition`}
          type="textarea"
          component={ renderDefinition }
          label="Definition"
        />
      </div>
    ))}
  </div>
)

const InputMatched = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
     
      <FieldArray name="vocabulary" component={ renderMatchedVocab } />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'matchedWords', 
  validate
})( InputMatched )

