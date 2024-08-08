"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table"
import { useEffect, useState } from "react"
import { api } from "./_lib/axios"
import Image from "next/image"


interface HomeProps {
  id: string
  name: string
  gold_medals: string
  silver_medals: string
  bronze_medals: string
  total_medals: string
  rank: string
  flag_url: string
}

interface ApiResponse {
  data: HomeProps[]
}

export default function Home() {

  const [countries, setCountries] = useState<HomeProps[]>([])

  useEffect(() => {
    api.get<ApiResponse>("countries")
      .then(resposta => setCountries(resposta.data.data))
  })

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <h1 className="text-3xl font-bold flex justify-center py-10">Ranking de medalhas por país</h1>

      <Table className="mb-12">
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>País</TableHead>
            <TableHead>Ouro</TableHead>
            <TableHead>Prata</TableHead>
            <TableHead>Bronze</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.id}>
              <TableCell className="text-left">{country.rank}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Image
                src={country.flag_url}
                alt={country.name}
                width={40}
                height={40}
              />
                {country.name}</TableCell>
              <TableCell className="text-left">{country.gold_medals}</TableCell>
              <TableCell className="text-left">{country.silver_medals}</TableCell>
              <TableCell className="text-left">{country.bronze_medals}</TableCell>
              <TableCell className="text-left">{country.total_medals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
