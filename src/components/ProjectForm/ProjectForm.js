import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Form, Label, Input, TextArea } from './styles';

const ProjectForm = () => {

    const [projectTitle, setName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
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

    const animatedComponents = makeAnimated();


    const handleSubmit = (evt) => {
      evt.preventDefault();

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
            Project Title:
            <Input
              type='text'
              value={projectTitle}
              onChange={e => setName(e.target.value)}
              placeholder='Enter your project projectTitle'
            />
            </Label>
            <Label>
            Client:
                <Select options = {clientOptions}
                />
            </Label>
            <Label>
                Project Description:
                <TextArea
                    type='text'
                    value={projectDescription}
                    onChange={e => setProjectDescription(e.target.value)}
                    placeholder='Enter your project description'
                />
            </Label>
            <Label>
            Technology Stack:
                <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={technologyOptions}
                />
            </Label>
            <Label>
            Andis:
                <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={andiOptions}
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
              <input type='submit' value='Submit' />
            </Label>
        </Form>
      );
}

export default ProjectForm;



