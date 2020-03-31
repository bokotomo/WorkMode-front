import React from 'react'
import { TopPageHandler } from '../../containers/TopPageContainer';
import { Header } from '../organisms/Header';
import { Contents } from '../organisms/Contents';
import { TextInput } from '../molecules/TextInput';
import { RadioInput } from '../molecules/RadioInput';
import { ShowState } from '../molecules/ShowState';
import { SubmitButton } from '../molecules/SubmitButton';

interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <Header title="Logo" />
                <Contents />
                <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue} />
                <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue} />
                <SubmitButton title='Click me' onClick={this.props.handleOnClick} />
                <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} />
            </React.Fragment>
        )
    }
}