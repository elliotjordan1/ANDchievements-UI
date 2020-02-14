import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Form, Label, Input, TextArea } from './styles';

const ProjectForm = () => {

    const [projectTitle, setName] = useState('');
    const [projectDescription1, setProjectDescription1] = useState('');
    const [projectDescription2, setProjectDescription2] = useState('');
    const [projectDescription3, setProjectDescription3] = useState('');
    const [projectCoverImageUrl, setProjectCoverImageUrl] = useState('');

    const clientOptions = [
        { value: 'condenast', label: 'Conde Nast' },
        { value: 'ordo', label: 'Ordo' }
    ];

     const technologyOptions = [
      { value: 'java', label: 'Java', color: '#00B8D9'},
      { value: 'react', label: 'React JS', color: '#0052CC',  },
      { value: 'csharp', label: 'C#', color: '#5243AA' },
    ];

     const andiOptions = [
      { value: 'jai', label: 'Jai', color: '#00B8D9', isFixed: true },
      { value: 'henry', label: 'Henry', color: '#0052CC',  },
      { value: 'elliot', label: 'Elliot', color: '#5243AA' },
    ];


    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(projectTitle, projectDescription1, projectDescription2, projectDescription3, projectCoverImageUrl);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
            Project Title:
            <Input
              type='text'
              value={projectTitle}
              onChange={e => setName(e.target.value)}
              placeholder='Enter your project title'
            />
            </Label>
            <Label>
            Client:
                <CreatableSelect
                onChange={e => console.log(e.value)}
                options = {clientOptions}
                />
            </Label>
            <Label>
                About the client:
                <TextArea
                    type='text'
                    value={projectDescription1}
                    onChange={e => setProjectDescription1(e.target.value)}
                    placeholder='Enter client info'
                />
            </Label>
            <Label>
                Goals of the project:
                <TextArea
                    type='text'
                    value={projectDescription2}
                    onChange={e => setProjectDescription2(e.target.value)}
                    placeholder='Enter project goals'
                />
            </Label>
            <Label>
                End result of the project:
                <TextArea
                    type='text'
                    value={projectDescription3}
                    onChange={e => setProjectDescription3(e.target.value)}
                    placeholder='Enter project results'
                />
            </Label>
            <Label>
            Technology Stack:
                <CreatableSelect
                      closeMenuOnSelect={false}
                      isMulti
                      options={technologyOptions}
                      onChange={e => console.log(e)}
                />
            </Label>
            <Label>
            Andis:
                <CreatableSelect
                      closeMenuOnSelect={false}
                      isMulti
                      options={andiOptions}
                      onChange={e => console.log(e)}
                />
            </Label>
            <Label>
                Project Cover Image URL:
                <Input
                  type='text'
                  value={projectCoverImageUrl}
                  onChange={e => setProjectCoverImageUrl(e.target.value)}
                  placeholder='Enter your project cover image URL'
                />
            </Label>
            <Label>
              <Input type='submit' value='Submit' />
            </Label>
        </Form>
      );
}

export default ProjectForm;



