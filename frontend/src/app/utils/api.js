const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchDoctors(page = 1, limit = 5) {
  const response = await fetch(
    `${API_BASE_URL}/employers?page=${page}&limit=${limit}`
  );
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return data;
}

export async function fetchDoctorById(id) {
  const response = await fetch(`${API_BASE_URL}/employers/${id}`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return data;
}

export async function fetchDepartments() {
  const response = await fetch(`${API_BASE_URL}/departments`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return data;
}

export async function fetchDepartmentsById(id) {
  const response = await fetch(`${API_BASE_URL}/departments/${id}`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return data;
}

export async function fetchDepartmentHead(departmentId) {
  try {
    const response = await fetch(`${API_BASE_URL}/departments/${departmentId}/head`);
    if (!response.ok) {
      throw new Error("Ошибка загрузки главного врача");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    throw error;
  }
}

export async function fetchDepartmentDoctors(departmentId) {
  const response = await fetch(
    `${API_BASE_URL}/departments/${departmentId}/doctors`
  );

  if (!response.ok) {
    console.error(
      "Ошибка ответа сервера:",
      response.status,
      response.statusText
    );
    throw new Error("Ошибка загрузки данных врачей отдела");
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("Ошибка обработки ответа сервера");
  }
}

export async function fetchFeedbacks() {
  const response = await fetch(`${API_BASE_URL}/feedbacks`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchDepartmentFeedback(deptId) {
  const response = await fetch(`${API_BASE_URL}/feedbacks/${deptId}`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function searchEntities(query, type) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/${type}/search?query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ошибка ответа от сервера:", errorText);
      throw new Error("Ошибка загрузки данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка в функции searchEntities:", error);
    throw error;
  }
}

export async function fetchMainEmployerPost(employerId) {
  const response = await fetch(`${API_BASE_URL}/employers/${employerId}/main-post`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  const data = await response.json();
  return data;
}