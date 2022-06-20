import { removeComponent, addTab, addComponent} from './helperFunctions'

import {initialData} from './initialData'


describe("<Tab/>", () => {
  test('add tab', () => {
    const newState = addTab(initialData,'3', 'tab', 'science' )

    expect(newState.layout.length).toBe(3)
  })

  test('add component to tab', () => {
    const newState = addComponent(initialData, 0, 'image', 'img-component', 'component' )

    expect(newState.layout[0].components.length).toBe(1)
  })

  test('remove component from tab', () => {
    const mockData = {
        layout: [
          {
            id:0,
            type: 'tabby',
            title: "tab 1",
            components:['cat', 'dog', 'meow', 'woof']
          },
          {
            id:0,
            type: 'tabby',
            title: "tab 2",
            components:['strawberry', 'banana', 'apple']
          }
        ]
    }
    const newState = removeComponent(mockData, 1, 2 )

    expect(newState.layout[1].components.length).toBe(2)

  })

  test('move component from one tab to another', () => {
    const newState = moveComponentToNewTab(mockData,)
  })
})

