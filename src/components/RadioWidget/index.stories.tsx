import { Meta, Story } from '@storybook/react'
import RadioWidget, { RadioWidgetProps } from '../RadioWidget'
import mockStationList from './mockStationList'
export default {
    title: 'Components/RadioWidget',
    component: RadioWidget,
    args: {
        stationList: mockStationList
    }
} as Meta

const Template: Story<RadioWidgetProps> = args => <RadioWidget  {...args} />

export const Basic = Template.bind({})
Basic.args = {}
