import * as React from 'react'
import { Button } from './Actions'
import styles from './styles.module.css'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export { Button, ExampleComponent }
