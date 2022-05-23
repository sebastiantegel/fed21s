import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IFormError } from "../models/FormError";
import { IMovie } from "../models/IMovie";

export const NewMovie = () => {
  const [movie, setMovie] = useState<IMovie>({
    id: "",
    name: "",
    imageUrl: "",
    year: 0,
  });
  const [errors, setErrors] = useState<IFormError>({
    nameRequired: false,
    nameRequiredMessage: "",
  });

  useEffect(() => {
    validate();
  }, [movie]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name);

    if (e.target.type === "number") {
      setMovie({ ...movie, [e.target.name]: +e.target.value });
    } else {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    }
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    // Validation
    console.log("Saving", movie);
  };

  const validate = (): boolean => {
    if (movie.name.length === 0) {
      setErrors({
        ...errors,
        nameRequired: true,
        nameRequiredMessage: "Detta fält är obligatoriskt",
      });
    } else {
      setErrors({
        ...errors,
        nameRequired: false,
      });
    }

    return false;
  };

  return (
    <form onSubmit={handleSave} noValidate>
      <label>Titel</label>
      <input
        type="text"
        value={movie.name}
        onChange={handleChange}
        name="name"
        required
      />
      {errors.nameRequired && (
        <div className="error">{errors.nameRequiredMessage}</div>
      )}
      <br />
      <label>Bild</label>
      <input
        type="text"
        value={movie.imageUrl}
        onChange={handleChange}
        name="imageUrl"
      />
      <br />
      <label>År</label>
      <input
        type="number"
        value={movie.year}
        onChange={handleChange}
        name="year"
      />
      <br />
      <button>Spara</button>

      <div>Movie: {JSON.stringify(movie)}</div>
    </form>
  );
};
