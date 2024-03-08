# NLP Project on Azure Documentation

## Project Overview

This project aims to leverage Azure services for Natural Language Processing (NLP) to analyze resumes in PDF format. The goal is to extract key phrases from resumes and match them with a given job description. The documentation provides step-by-step instructions on setting up and deploying the solution.

## Azure Services and Tools

### 1. Azure Cognitive Services

- **Text Analytics API:**
  - Use this API to extract key phrases from resumes. It identifies key topics, entities, and language from the text.
  
- **Language Understanding (LUIS):**
  - Train LUIS to recognize specific job-related terms or skills.

### 2. Azure Storage

- Store resumes in Azure Blob Storage, providing scalable and secure storage.

### 3. Azure Functions

- Set up serverless functions to trigger NLP processing when a new resume is uploaded to Azure Storage, using Azure Blob Storage triggers.

### 4. Azure Search

- Utilize Azure Search to index and search through extracted key phrases, facilitating the matching of resumes with job descriptions based on relevant keywords.

### 5. Azure Logic Apps

- Create workflows using Azure Logic Apps to automate resume processing. Trigger Logic Apps based on events (e.g., new files in Azure Storage) and integrate various services seamlessly.

### 6. Azure Active Directory (Azure AD)

- Use Azure AD for user authentication and access control.

## Deployment Steps

1. **Set Up Azure Cognitive Services:**
   - Obtain API keys for Text Analytics API and LUIS.

2. **Configure Azure Storage:**
   - Create a storage account and set up a container for uploading resumes.

3. **Develop Azure Functions:**
   - Create functions to trigger NLP processing when new resumes are uploaded.

4. **Implement Azure Search:**
   - Configure Azure Search to index and search through extracted key phrases.

5. **Build Azure Logic Apps:**
   - Design Logic Apps workflows to automate the processing of resumes.

6. **Integrate Azure AD:**
   - Set up Azure AD for user authentication and access control.

## Usage Guidelines

- Upload resumes in PDF format to the designated Azure Blob Storage container.
- Monitor the Azure Functions logs for NLP processing updates.
- Access the matching results through the Azure Search index.

## Notes

- Be aware of Azure free trial limitations and pricing considerations.
- Test thoroughly during the free trial to ensure the solution meets requirements before production deployment.

-----------------------------------------------------------------
# Details About Each Service
# Azure Cognitive Services

## Text Analytics API

- **Purpose:** Extract key phrases and sentiment analysis from text data.
- **Setup:**
  - Create a Text Analytics resource in the Azure portal.
  - Obtain the API key and endpoint.
  - Use the API key and endpoint in your application to make requests.

## Language Understanding (LUIS)

- **Purpose:** Build applications that can understand natural language and predict user intentions.
- **Setup:**
  - Create a LUIS resource in the Azure portal.
  - Define and train language models to recognize specific job-related terms or skills.
  - Integrate the trained models into your application using the provided endpoint.

# Azure Storage

## Blob Storage

- **Purpose:** Scalable and secure storage solution for various types of data, including resumes in PDF format.
- **Setup:**
  - Create a Blob Storage account in the Azure portal.
  - Set up a container for storing resumes.
  - Obtain the connection string for accessing the storage account.

# Azure Functions

- **Purpose:** Execute serverless functions in response to events like file uploads.
- **Setup:**
  - Create an Azure Functions app in the Azure portal.
  - Develop functions triggered by Azure Blob Storage events.
  - Configure bindings and connections to other Azure services if needed.

# Azure Search

- **Purpose:** Index and search through large amounts of text data efficiently.
- **Setup:**
  - Create an Azure Search service in the Azure portal.
  - Define an index schema to represent the structure of your resume data.
  - Index the extracted key phrases from resumes.
  - Query the index to find matching resumes based on job descriptions.

# Azure Logic Apps

- **Purpose:** Automate workflows and integrate services in a visual manner.
- **Setup:**
  - Create a Logic Apps workflow in the Azure portal.
  - Define triggers based on events, such as a new file in Azure Blob Storage.
  - Use connectors to interact with Azure Cognitive Services, Azure Storage, and other services.
  - Design a workflow to handle resume processing and matching.

# Azure Active Directory (Azure AD)

- **Purpose:** Provide identity and access management services for your application.
- **Setup:**
  - Set up an Azure AD tenant in the Azure portal.
  - Configure authentication for your application using Azure AD.
  - Define roles and permissions for access control.