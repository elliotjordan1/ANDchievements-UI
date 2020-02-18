import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Form, Label, Input, TextArea } from './styles';
import getAllAndis from '../../api/handlers/andis';
import getAllTechnologies from '../../api/handlers/technologies';
import getAllClients from '../../api/handlers/clients';

const ProjectForm = () => {

    const clientOptions = [];
    const technologyOptions = [];
    const andiOptions = [];

    const clientList = [];
    const technologyList = [];
    const andiList = [];

    const [andis, setAndis] = useState(undefined);

    useEffect(() => {
        const fetchAndis = async () => {
        const response = await getAllAndis();

        console.log(response.data.res);
        setAndis(response.data.res);

        console.log(andis);

        //        projects.forEach(element => {
        //          const andiValues = { value: element.andiid, label: element.firstname};
        //          andiOptions.push(andiValues);
        //        });
        }

        if (andis === undefined) {
            fetchAndis();
        }
    });

    const fetchTechnologies = async () => {
        const response = await getAllTechnologies();

        response.data.res.forEach(element => {
          const technologyValues = { value: element.technologyid, label: element.name };
          technologyOptions.push(technologyValues);
        });
    }

    const fetchClients = async () => {
        const response = await getAllClients();
        response.data.res.forEach(element => {
          const clientsValues = { value: element.clientid, label: element.clientname };
          clientOptions.push(clientsValues);
        });
    }

    fetchTechnologies();
    fetchClients();

    clientList.forEach(element => {
      const clientsValues = { value: element.value, label: element.label };
      clientOptions.push(clientsValues);
    });

    technologyList.forEach(element => {
      const technologiesValues = { value: element.value, label: element.label };
      technologyOptions.push(technologiesValues);
    });

    andiList.forEach(element => {
      const andiValues = { value: element.value, label: element.label };
      technologyOptions.push(andiValues);
    });

    const [projectTitle, setName] = useState('');
    const [projectDescription1, setProjectDescription1] = useState('');
    const [projectDescription2, setProjectDescription2] = useState('');
    const [projectDescription3, setProjectDescription3] = useState('');
    const [projectCoverImageUrl, setProjectCoverImageUrl] = useState('');

    return (
        <Form >
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
                />
            </Label>
            <Label>
            Andis:
                <CreatableSelect
                      closeMenuOnSelect={false}
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
              <Input type='submit' value='Submit'/>
            </Label>
        </Form>
      );
}

export default ProjectForm;



