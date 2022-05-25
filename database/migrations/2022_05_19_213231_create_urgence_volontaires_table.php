<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUrgenceVolontairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urgence_volontaires', function (Blueprint $table) {
            $table->unsignedBigInteger('IdVolontaire');
            $table->foreign('IdVolontaire')->references('IdVolontaire')
            ->on('volontaires');
            $table->unsignedBigInteger('IdUrg');
            $table->foreign('IdUrg')->references('IdUrg')
            ->on('urgences');
            $table->primary(['IdVolontaire','IdUrg']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('urgence_volontaires');
    }
}
