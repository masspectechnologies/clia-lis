# API Documentation

## User Authentication

### Endpoints
- **POST /api/auth/login**  
  **Request:**  
    - Body:
        ```json
        { 
            "username": "string",
            "password": "string"
        }
        ```  
  **Response:**  
    - Success (200): 
        ```json
        {
            "token": "string",
            "expires_in": "integer"
        }
        ```  
    - Error (401): 
        ```json
        {
            "error": "invalid credentials"
        }
        ```  

### HIPAA Compliance Notes
- Ensure secure transmission via HTTPS.
- Passwords must be hashed using bcrypt.

---

## Patient Management

### Endpoints
- **GET /api/patients/{id}**  
- **POST /api/patients**  
- **PUT /api/patients/{id}**  
- **DELETE /api/patients/{id}**  

---

## Medical Information Management

### Endpoints
- **GET /api/medical-info/{patientId}**  
- **POST /api/medical-info**  
- **PUT /api/medical-info/{id}**  
- **DELETE /api/medical-info/{id}**  

---

## Lab Orders

### Endpoints
- **POST /api/lab-orders**  
  **Request:**  
    - Body:
        ```json
        {
            "cpt_codes": ["string"],
            "icd10_codes": ["string"],
            "patient_id": "string"
        }
        ```  
  **Response:**  
    - Success (201):  
        ```json
        {
            "order_id": "string"
        }
        ```  
    - Error (400):  
        ```json
        {
            "error": "invalid data"
        }
        ```  

### HIPAA Compliance Notes
- Patient data should be encrypted; access must be restricted.

---

## Ordering Physician Management

### Endpoints
- **GET /api/physicians**  
- **POST /api/physicians**  
- **PUT /api/physicians/{id}**  
- **DELETE /api/physicians/{id}**  

---

## Audit Logs Retrieval

### Endpoints
- **GET /api/audit-logs**  
- **GET /api/audit-logs/{id}**  

### HIPAA Compliance Notes
- Audit logs must be immutable and securely stored. Only authorized personnel should have access.

---