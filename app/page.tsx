"use client";
import { useState } from "react";
import useSWR from "swr";
import {
  findPetsByStatus,
  addPet,
  updatePet,
  deletePet,
  getPetById,
} from "../services/petstore";

const HomePage = () => {
  const [status, setStatus] = useState<string>("available");
  const [petId, setPetId] = useState<number | null>(null);
  const [petName, setPetName] = useState<string>("");
  const [petStatus, setPetStatus] = useState<string>("available");
  const [editMode, setEditMode] = useState<boolean>(false);

  const { data: pets, error, mutate } = useSWR(
    ["findPetsByStatus", [status]],
    () => findPetsByStatus([status])
  );

  const handleAddPet = async () => {
    const newPet = {
      id: petId,
      name: petName,
      status: petStatus,
    };
    await addPet(newPet);
    mutate();
    setPetName("");
    setPetId(null);
    setPetStatus("available");
  };

  const handleUpdatePet = async () => {
    if (petId) {
      const updatedPet = {
        id: petId,
        name: petName,
        status: petStatus,
      };
      await updatePet(updatedPet);
      mutate();
      setPetId(null);
      setPetName("");
      setPetStatus("available");
      setEditMode(false);
    }
  };

  const handleDeletePet = async (id: number) => {
    await deletePet(id);
    mutate();
  };

  const handleEditPet = async (id: number) => {
    const pet = await getPetById(id);
    setPetId(pet.id);
    setPetName(pet.name);
    setPetStatus(pet.status);
    setEditMode(true);
  };

  if (error) return <div className="text-red-500 text-center">Error al cargar las mascotas</div>;
  if (!pets) return <div className="text-gray-500 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3d348b] to-[#7678ed] text-white p-4">
      {/* Cabecera personalizada */}
      <header className="mb-8 flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-[#f7b801]">Petstore</h1>
        <p className="text-lg font-medium text-[#f18701]">🍜Gestiona tus comida fácilmente 👲🏽</p>
      </header>

      {/* Filtro por estado */}
      <div className="mb-6 flex justify-center">
        <label className="mr-2 font-semibold">Filter by Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f7b801] focus:border-transparent"
        >
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>

      {/* Tabla de mascotas */}
      <table className="w-full border-collapse bg-white text-black rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-[#3d348b] text-white">
          <tr>
            <th className="p-3 text-left font-bold uppercase tracking-wide">ID</th>
            <th className="p-3 text-left font-bold uppercase tracking-wide">Nombre</th>
            <th className="p-3 text-left font-bold uppercase tracking-wide">Status</th>
            <th className="p-3 text-left font-bold uppercase tracking-wide">CRUD</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet: any) => (
            <tr
              key={pet.id}
              className="hover:bg-gray-100 transition-colors duration-300 group"
            >
              <td className="p-3 border-b border-gray-200">{pet.id}</td>
              <td className="p-3 border-b border-gray-200 font-bold text-[#f7b801] group-hover:text-[#f18701]">
                {pet.name}
              </td>
              <td className="p-3 border-b border-gray-200">{pet.status}</td>
              <td className="p-3 border-b border-gray-200 flex gap-2">
                <button
                  onClick={() => handleEditPet(pet.id)}
                  className="bg-[#f7b801] hover:bg-[#f18701] text-white px-4 py-2 rounded-md transition-colors duration-300 shadow-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePet(pet.id)}
                  className="bg-[#f35b04] hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300 shadow-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario para agregar/editar mascotas */}
      <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-[#f7b801]">
        {editMode ? "Edit Pet" : "Add Pet"}
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          value={petId ?? ""}
          onChange={(e) => setPetId(Number(e.target.value) || null)}
          placeholder="ID"
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f7b801] w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Nombre de mascota"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f7b801] w-full md:w-auto"
        />
        <select
          value={petStatus}
          onChange={(e) => setPetStatus(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f7b801] w-full md:w-auto"
        >
          <option value="available">Disponible</option>
          <option value="pending">Pendiente</option>
          <option value="sold">Vendida</option>
        </select>
        <button
          onClick={editMode ? handleUpdatePet : handleAddPet}
          className={`px-6 py-2 rounded-md font-semibold shadow-md ${
            editMode
              ? "bg-[#f7b801] hover:bg-[#f18701]"
              : "bg-[#7678ed] hover:bg-[#3d348b]"
          } text-white transition-colors duration-300`}
        >
          {editMode ? "Actualizar Mascota" : "Agregar Mascota"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;