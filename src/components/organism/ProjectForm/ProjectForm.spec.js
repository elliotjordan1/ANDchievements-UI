import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { ToastProvider } from 'react-toast-notifications';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';
import ProjectForm, { formValidator, filterLists, submitForm, addNewClient } from '.';

// eslint-disable-next-line no-unused-vars
let Mock;

const andiList = [
  {
    'andiid': '44c82047-3fa3-4f9a-a26e-c7e890e600e4',
    'name': 'James Grant',
    'andiimageurl': ' '
  },
  {
      'andiid': 'af423d64-f7f0-49f3-b50f-1b3cf1c39a89',
      'name': 'Michelle',
      'andiimageurl': 'https://i.imgur.com/BCLisr1.png'
  },
];

const techList = [
  {
    'technologyid': 'd2e0261c-78d6-45fa-8905-d6c2c2d71160',
    'name': 'NodeJS',
    'logoimagepath': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
  },
  {
      'technologyid': '44de0886-83c2-41ce-858f-862cfa5b84c7',
      'name': 'ReactJS',
      'logoimagepath': 'https://cdn.worldvectorlogo.com/logos/react.svg'
  },
];

const clientList = [
  {
    'clientid': '699d4442-f5e2-4411-b648-3f858c4efda7',
    'clientname': 'AND Digital',
    'sector': 'Technology',
    'clientlogourl': 'https://static.andigital.com/wp-content/uploads/2017/06/02134333/AND_LOGO_LONG_RGB_ON_COLOUR.png',
    'locationname': 'London'
  },
  {
      'clientid': '6fd63244-09b2-4b6e-b84d-7efb4b7e6b40',
      'clientname': 'Condé Nast',
      'sector': 'Media',
      'clientlogourl': 'https://d1ri6y1vinkzt0.cloudfront.net/media/images/Original/51b7ab3c-4814-4cca-b6ae-c1de989d789d.jpg?v=-379281842',
      'locationname': 'London'
  },
];

const BaseComponent = () => (
  <ToastProvider>
    <ProjectForm>
      <div>I am a form!</div>
    </ProjectForm>
  </ToastProvider>
)

describe('ProjectForm component', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  })
  it('renders the component correctly with a network error for andis/techStacks/clients', async () => {
    await act(async () => {
      Mock.onGet().networkError();

      const component = await render(<BaseComponent />);

      expect(component).toMatchSnapshot();
    });
  });
  it('renders the component correctly when returning clients, andis and tech stacks', async () => {
    await act(async () => {
      Mock.onGet(/.+?(?=\/andis\/get)/).reply(200, { andis: andiList });
      Mock.onGet(/.+?(?=\/technology\/get)/).reply(200, { technologies: techList });
      Mock.onGet(/.+?(?=\/clients\/get)/).reply(200, { clients: clientList });

      const component = await render(<BaseComponent />)

      expect(component).toMatchSnapshot();
    });
  });
  it('successfully changes text in andi text box', async () => {
    await act(async () => {
      Mock.onGet(/.+?(?=\/andis\/get)/).reply(200, { andis: andiList });
      Mock.onGet(/.+?(?=\/technology\/get)/).reply(200, { technologies: techList });
      Mock.onGet(/.+?(?=\/clients\/get)/).reply(200, { clients: clientList });

      const { getByPlaceholderText } = render(<BaseComponent />)

      await wait (() => {
        const input = getByPlaceholderText('Select ANDis...');
        
        expect(input.value).toEqual('');

        fireEvent.change(input, { target: { value: 'Sam' }})

        expect(input.value).toEqual('Sam');

        fireEvent.change(input, { target: { value: '' }})

        expect(input.value).toEqual('');
      });
    });
  });
  it('successfully changes text in tech stack text box', async () => {
    await act(async () => {
      Mock.onGet(/.+?(?=\/andis\/get)/).reply(200, { andis: andiList });
      Mock.onGet(/.+?(?=\/technology\/get)/).reply(200, { technologies: techList });
      Mock.onGet(/.+?(?=\/clients\/get)/).reply(200, { clients: clientList });

      const { getByPlaceholderText } = await render(<BaseComponent />)

      await wait (() => {
        const input = getByPlaceholderText('Select Tech Stacks...');
        
        expect(input.value).toEqual('');

        fireEvent.change(input, { target: { value: 'Sam' }})

        expect(input.value).toEqual('Sam');

        fireEvent.change(input, { target: { value: '' }})

        expect(input.value).toEqual('');
      });
    });
  });
  it('successfully inputs and enters the entire form with a successful', async () => {
    await act(async () => {
      Mock.onPost().reply(201, {
        status: 201
      });

      const { getByPlaceholderText, getByText } = await render(
        <ToastProvider>
          <ProjectForm defaultValues = {{
                        clientId: '1',
                        clientName: 'AND',
                        projectAndis: [ { id : '1', name: 'Jerry' }],
                        projectTech: [{ id: '2', name: 'ReactJS'}]
                      }} >
            <div>I am a form!</div>
          </ProjectForm>
        </ToastProvider>
      );

      const projectTitle = getByPlaceholderText('Project title');
      fireEvent.change(projectTitle, { target: { value: 'Title' }});
      expect(projectTitle.value).toEqual('Title');

      const clientDescription = getByPlaceholderText('Client Description');
      fireEvent.change(clientDescription, { target: { value: 'Client Desc' }});
      expect(clientDescription.value).toEqual('Client Desc');

      const projectDescription = getByPlaceholderText('Project Description');
      fireEvent.change(projectDescription, { target: { value: 'Proj Desc' }});
      expect(projectDescription.value).toEqual('Proj Desc');

      const projectOutcomes = getByPlaceholderText('Project Outcomes');
      fireEvent.change(projectOutcomes, { target: { value: 'Proj Out' }});
      expect(projectOutcomes.value).toEqual('Proj Out');

      const coverImageUrl = getByPlaceholderText('Cover Image URL');
      fireEvent.change(coverImageUrl, { target: { value: 'cover.image.url' }});
      expect(coverImageUrl.value).toEqual('cover.image.url');

      const submitButton = getByText('CREATE');
      fireEvent.click(submitButton);
    });
  });
});

describe('addNewClient', () => {
  it('successfully calls setFieldValue on function call', () => {
    const setFieldValue = jest.fn();

    expect(setFieldValue).toHaveBeenCalledTimes(0);

    addNewClient({ 
      new_client: [ 
      {
        clientid: 1,
        name: 'test'
      }
    ]},{ setFieldValue })

    expect(setFieldValue).toHaveBeenCalledTimes(2);
  })
})

describe('onSubmit', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });
  it('runs expected functions for failed request', async () => {
    Mock.onPost().networkError();

    const values = {
      projectAndis: ['1'],
      projectTech: ['2']
    };

    const setSubmitting = jest.fn();
    const addToast = jest.fn();

    expect(setSubmitting).toHaveBeenCalledTimes(0);
    expect(addToast).toHaveBeenCalledTimes(0);

    await submitForm(values, { setSubmitting, addToast });

    expect(setSubmitting).toHaveBeenCalledTimes(1);
    expect(addToast).toHaveBeenCalledTimes(1);
  });
  it('runs expected functions for correct request', async () => {
    Mock.onPost().reply(201, {});

    const values = {
      projectAndis: ['1'],
      projectTech: ['2']
    };

    const setSubmitting = jest.fn();
    const addToast = jest.fn();

    expect(setSubmitting).toHaveBeenCalledTimes(0);
    expect(addToast).toHaveBeenCalledTimes(0);

    await submitForm(values, { setSubmitting, addToast });

    expect(setSubmitting).toHaveBeenCalledTimes(1);
    expect(addToast).toHaveBeenCalledTimes(1);
  });
})

describe('formValidator function', () => {
  it ('validates projectTitle correctly', () => {
    const values = {
      projectTitle: '',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectTitle: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates clientId correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: '',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      clientName: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates clientName correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: '',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      clientName: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates clientDescription correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: '',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectDescription: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectDescription correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: '',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectDescription: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectOutcomes correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: '',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectDescription: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates descriptions correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: '',
      projectDescription: '',
      projectOutcomes: '',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectDescription: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates coverImageUrl correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: '',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      coverImageUrl: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectAndis correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: [],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectAndis: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectAndis correctly for undefined array', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: undefined,
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectAndis: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectTech correctly', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: [],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectTech: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates projectTech correctly for undefined array', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: undefined,
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const expectedResult = {
      projectTech: 'Required'
    };

    const actualResult = formValidator(values);

    expect(actualResult).toEqual(expectedResult);
  });
  it ('validates correctly when all values true', () => {
    const values = {
      projectTitle: 'test',
      clientId: 'test',
      clientName: 'test',
      clientDescription: 'test',
      projectDescription: 'test',
      projectOutcomes: 'test',
      coverImageUrl: 'test',
      projectAndis: ['test'],
      projectTech: ['test'],
      currentAndiName: 'test',
      currentTechName: 'test'
    }

    const actualResult = formValidator(values);

    expect(actualResult).toEqual({});
  });
});

describe('filterLists', () => {
  it('successfully filters a list for a value', () => {
    const listOne = [
      {
        value: 1,
        label: 'abc'
      },
      {
        value: 2,
        label: 'def'
      },
      {
        value: 3,
        label: 'ghi'
      }
    ];

    const listTwo = [
      {
        value: 1,
        label: 'abc'
      },
      {
        value: 2,
        label: 'def'
      }
    ];

    const expectedResult = [
      {
        value: 3,
        label: 'ghi'
      }
    ]

    const searchTerm = 'ghi';

    const actualResult = filterLists(listOne, listTwo, searchTerm);

    expect(actualResult).toEqual(expectedResult);
  })
})
