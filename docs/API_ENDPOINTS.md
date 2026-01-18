# API Endpoints Documentation

## Patient Management

### Create Patient
- **Endpoint**: `POST /patients`
- **Request Body**:
```json
{
    "name": "John Doe",
    "dob": "1990-01-01",
    "gender": "male",
    "contact": "1234567890"
}
```
- **Response**:
```json
{
    "id": "1",
    "message": "Patient created successfully."
}
```

### Get Patient
- **Endpoint**: `GET /patients/{id}`
- **Response**:
```json
{
    "id": "1",
    "name": "John Doe",
    "dob": "1990-01-01",
    "gender": "male",
    "contact": "1234567890"
}
```

### Update Patient
- **Endpoint**: `PUT /patients/{id}`
- **Request Body**:
```json
{
    "contact": "0987654321"
}
```
- **Response**:
```json
{
    "message": "Patient updated successfully."
}
```

### Delete Patient
- **Endpoint**: `DELETE /patients/{id}`
- **Response**:
```json
{
    "message": "Patient deleted successfully."
}
```

## Lab Orders

### Create Lab Order
- **Endpoint**: `POST /lab-orders`
- **Request Body**:
```json
{
    "patient_id": "1",
    "tests": [{ "test_code": "CPT123", "icd_code": "ICD10A" }]
}
```
- **Response**:
```json
{
    "id": "101",
    "message": "Lab order created successfully."
}
```

### Get Lab Order
- **Endpoint**: `GET /lab-orders/{id}`
- **Response**:
```json
{
    "id": "101",
    "patient_id": "1",
    "status": "pending",
    "tests": [{ "test_code": "CPT123", "icd_code": "ICD10A" }]
}
```

### Update Lab Order
- **Endpoint**: `PUT /lab-orders/{id}`
- **Request Body**:
```json
{
    "status": "completed"
}
```
- **Response**:
```json
{
    "message": "Lab order updated successfully."
}
```

### Delete Lab Order
- **Endpoint**: `DELETE /lab-orders/{id}`
- **Response**:
```json
{
    "message": "Lab order deleted successfully."
}
```

## Ordering Physicians

### Create Physician
- **Endpoint**: `POST /physicians`
- **Request Body**:
```json
{
    "name": "Dr. Smith",
    "specialty": "Cardiology"
}
```
- **Response**:
```json
{
    "id": "10",
    "message": "Physician created successfully."
}
```

### Get Physician
- **Endpoint**: `GET /physicians/{id}`
- **Response**:
```json
{
    "id": "10",
    "name": "Dr. Smith",
    "specialty": "Cardiology"
}
```

### Update Physician
- **Endpoint**: `PUT /physicians/{id}`
- **Request Body**:
```json
{
    "specialty": "Internal Medicine"
}
```
- **Response**:
```json
{
    "message": "Physician updated successfully."
}
```

### Delete Physician
- **Endpoint**: `DELETE /physicians/{id}`
- **Response**:
```json
{
    "message": "Physician deleted successfully."
}
```

## Authentication

### User Login
- **Endpoint**: `POST /login`
- **Request Body**:
```json
{
    "username": "user",
    "password": "pass"
}
```
- **Response**:
```json
{
    "token": "xyz.abc.def",
    "message": "Login successful."
}
```

### User Logout
- **Endpoint**: `POST /logout`
- **Response**:
```json
{
    "message": "Logout successful."
}
```

### Token Refresh
- **Endpoint**: `POST /refresh`
- **Response**:
```json
{
    "token": "abc.def.ghi",
    "message": "Token refreshed successfully."
}
```

## Audit Logging

### Log Action
- **Endpoint**: `POST /audit`
- **Request Body**:
```json
{
    "action": "create",
    "entity": "patient",
    "entity_id": "1"
}
```
- **Response**:
```json
{
    "message": "Action logged successfully."
}
```

### Retrieve Logs
- **Endpoint**: `GET /audit`
- **Response**:
```json
[
    {
        "id": "1",
        "action": "create",
        "entity": "patient",
        "entity_id": "1",
        "timestamp": "2026-01-18T08:13:13Z"
    }
]
```
