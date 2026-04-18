export type MedicalCondition = {
  id: string;
  label: string;
};

export type Cat = {
  id: string;
  name: string;
  birthDate?: string;
  microchip?: string;
  breed?: string;
  weightKg?: number;
  allergies?: string[];
  conditions?: MedicalCondition[];
  photoUrl?: string;
};
